import { GridCallbackDetails, GridColDef } from '@mui/x-data-grid';

export type DivProps = 
{
	width: string;
    height: number;
}

export type DataGridProps =
{
    total: number;
    rows?: any;
    columns: GridColDef[];
    loading?: boolean;
    perPage: number;
    page: number;
    handlePageChange: (page: number, details: GridCallbackDetails) => void;
}

export type CustomDataGridProps = 
{
    div: DivProps;
    dataGrid: DataGridProps;
}