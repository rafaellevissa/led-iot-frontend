import * as React from 'react';
import { CustomDiv } from './styles';
import { CustomDataGridProps } from './types';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomDataGrid(props: CustomDataGridProps)
{
	return (
		<CustomDiv width={ props.div.width } height={ props.div.height } >
			<DataGrid 
				rows={props.dataGrid.rows}
				columns={props.dataGrid.columns}
				rowCount={props.dataGrid.total}
				loading={props.dataGrid.loading}
				rowsPerPageOptions={[props.dataGrid.perPage]}
				pagination
				page={props.dataGrid.page}
				pageSize={props.dataGrid.perPage}
			 	paginationMode='server'
				onPageChange={props.dataGrid.handlePageChange}
				disableSelectionOnClick
			/>
		</CustomDiv>
	);
}