import { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material"
import { PowerSettingsNew } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/use-translation";
import { Device, Page } from "../../../store/modules/device/types";
import { ButtonContainer } from "./styles"
import { list } from "../../../store/modules/device/actions";
import Layout from "../../../layouts/dashboard";
import mqtt from 'mqtt/dist/mqtt';

export const InteractiveDevice = () => {
  const dispatch = useDispatch();
  const { translate } = useTranslation()
  const { item, error, loading } = useSelector<any, any>(item => item.device)
  const [page] = useState<Page>({
    currentPage: 0,
    perPage: 1000
  });
  const [topic, setTopic] = useState<string>();
  const [mqttConnected, setMqttConnected] = useState<boolean>(false);
  const [ledTurnedOn, setLedTurnedOn] = useState<boolean>(false);

  const mqttClient = useRef(mqtt.connect(process.env.REACT_APP_MQTT_BROKER_URL as string))

  const loadDevices = useCallback(() =>
    dispatch(list(page)),
    [dispatch, page]
  );

  const topicSplit = (topic: string) => {
    const [send, receive] = topic?.split(':') || []

    return {
      send,
      receive
    }
  }

  const loadMqtt = useCallback(() => {
    if (mqttClient.current) {
      mqttClient.current.on('connect', () => {
        setMqttConnected(true);
      });

      mqttClient.current.on('disconnect', () => {
        setMqttConnected(false);
      });

      mqttClient.current.on('message', (topic: string, message: string) => {
        setLedTurnedOn(message.toString() === 'D' ? false : true);
      });
    }
  }, []);

  useEffect(() => {
    loadDevices();
    loadMqtt();
  }, [loadDevices, loadMqtt]);

  const handleClickTurnOn = () => {
    if (mqttConnected && topic) {
      const { send, receive } = topicSplit(topic)
      mqttClient.current.publish(send, 'L', 0);
      mqttClient.current.subscribe(receive, 0);
    } else {
      alert(translate('DEVICE:MQTT:NOT_CONNECTED'));
    }
  }

  const handleClickTurnOff = () => {
    if (mqttConnected && topic) {
      const { send, receive } = topicSplit(topic)
      mqttClient.current.publish(send, 'D', 0);
      mqttClient.current.subscribe(receive, 0);
    } else {
      alert(translate('DEVICE:MQTT:NOT_CONNECTED'));
    }
  }

  const handleChangeDevice = ({ target }: SelectChangeEvent<string>) => {
    if (mqttConnected && target.value) {
      const { receive } = topicSplit(target.value)

      mqttClient.current.subscribe(receive, 0);

      setTopic(target.value);
    } else {
      alert(translate('DEVICE:MQTT:NOT_CONNECTED'));
    }
  }

  return (
    <Layout>
      <Container>
        <Paper elevation={1} style={{ padding: 10 }}>
          {!loading && (
            <Grid container spacing={2} justifyContent="center">
              <Grid item md={6}>
                <FormControl fullWidth>
                  <InputLabel id="device-label">{translate('DEVICE:SHOW_TITLE')}</InputLabel>
                  <Select
                    labelId="device-label"
                    value={topic}
                    label={translate('DEVICE:SHOW_TITLE')}
                    onChange={handleChangeDevice}
                  >
                    {item?.data?.map((item: Device) => (
                      <MenuItem value={item.topic}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <ButtonContainer item md={2}>
                <LoadingButton
                  startIcon={
                    <PowerSettingsNew />
                  }
                  loading={!mqttConnected}
                  variant="contained"
                  disabled={!topic}
                  size="large"
                  onClick={ledTurnedOn ? handleClickTurnOff : handleClickTurnOn}
                  color={ledTurnedOn ? 'error' : 'primary'}
                >
                  {ledTurnedOn ? translate('DEVICE:TURNOFF') : translate('DEVICE:TURNON')}
                </LoadingButton>
              </ButtonContainer>
            </Grid>
          )}

          {loading && (
            <LinearProgress />
          )}
        </Paper>

        <Paper elevation={1} style={{ marginTop: 20 }}>
          <List dense={true}>
            <ListItem>
              <ListItemText primary={
                <Typography variant="h6" component="h3">{translate('COMMON:STATUS')}</Typography>
              } />
            </ListItem>
            <ListItem>
              <ListItemText primary={
                <div>
                  {translate('DEVICE:CONNECTION_BROKER')} <b>{mqttConnected ? translate('COMMON:YES') : translate('COMMON:NO')}</b>
                </div>
              } />
            </ListItem>
            <ListItem>
              <ListItemText primary={
                <div>
                  <span>{translate('DEVICE:STATUS')} </span>
                  <span>
                    <img
                      src={`assets/images/${ledTurnedOn ? 'ligado' : 'desligado'}.png`}
                      width={20}
                      height={20}
                    /> (<b>{ledTurnedOn ? translate('DEVICE:TURNEDON') : translate('DEVICE:TURNEDOFF')}</b>)
                  </span>
                </div>
              } />
            </ListItem>
          </List>
        </Paper>
      </Container>
    </Layout >
  )
}