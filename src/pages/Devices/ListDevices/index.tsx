import React, { useEffect, useState } from "react";
import { Divider, Grid, Typography, Snackbar, Alert } from '@mui/material';
import { GridColDef, GridCellParams } from '@mui/x-data-grid';

import Show from './Components/Show';
import Edit from './Components/Edit';
import Add from './Components/Add';
import Delete from './Components/Delete';

import CustomDataGrid from '../../../components/DataGrid';
import Layout from '../../../layouts/dashboard';
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../../store/modules/device/actions";
import { useTranslation } from "../../../hooks/use-translation";
import { Page } from "../../../store/modules/device/types";

export const ListDevicesPage = () => {
	const dispatch = useDispatch();
	const { translate } = useTranslation()
	const { item, error, loading } = useSelector<any, any>(item => item.device)
	const [page, setPage] = useState<Page>({
		currentPage: 0,
		perPage: 20
	});

	useEffect(() => {
		dispatch(list(page));
	}, [page]);



	const handlePageChange = (newPage: number) => {
		setPage({
			...page,
			currentPage: newPage
		})
	}

	const columns: GridColDef[] = [
		{ field: 'id', headerName: translate('DEVICE:RESOURCES:ID'), minWidth: 30, flex: 0.3 },
		{ field: 'name', headerName: translate('DEVICE:RESOURCES:NAME'), minWidth: 200, flex: 1 },
		{
			field: 'actions',
			headerName: translate('DEVICE:RESOURCES:ACTIONS'),
			minWidth: 100,
			flex: 1,

			renderCell: (params: GridCellParams) => {
				return (
					<div>
						<Show id={params.row.id} />
						<Edit id={params.row.id} />
						<Delete id={params.row.id} />
					</div>
				);
			}
		},
	]

	return (
		<Layout>
			<Grid container sx={{ width: '100%' }}>
				<Grid item xs={12}>
					<Typography variant='h6' >{translate('DEVICE:TITLE')}</Typography>
					<Divider />
				</Grid>

				<Grid item xs={12}>
					<Add />
				</Grid>

				<Grid item xs={12}>
					{Array.isArray(item?.data) && (
						<CustomDataGrid
							div={{ width: '100%', height: 500 }}
							dataGrid={{
								columns,
								rows: item.data,
								total: item.meta.total,
								handlePageChange,
								perPage: page.perPage,
								page: page.currentPage,
								loading,
							}}
						/>
					)}
				</Grid>
			</Grid>

			<Snackbar open={error} autoHideDuration={300}>
				<Alert severity="error" sx={{ width: '100%' }}>
					{translate('DEVICE:ERROR')}
				</Alert>
			</Snackbar>
		</Layout>
	);
}
