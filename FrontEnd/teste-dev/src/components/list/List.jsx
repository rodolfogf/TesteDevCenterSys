import React from "react";
import { Box, Button, Container, Paper, Stack } from "@mui/material";
import Subtitulo from "../custom/Subtitulo";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Navegacao from "../custom/Navegacao";

const handleEdit = (id) => {
    console.log('Edit item with id:', id);
    // Implementar a lógica de edição aqui
};

const handleDelete = (id) => {
    console.log('Delete item with id:', id);
    // Implementar a lógica de deleção aqui
};


const columnsActions = [
    {
        field: 'actions',
        headerName: 'Ações',
        width: 200,
        renderCell: (params) => (
            <Box>
                <Button
                    onClick={() => handleEdit(params.id)}
                    color="primary"
                    size="small"
                    startIcon={<EditIcon />}
                >
                    Editar
                </Button>
                <Button
                    onClick={() => handleDelete(params.id)}
                    color="secondary"
                    size="small"
                    startIcon={<DeleteForeverIcon />}
                    style={{ marginLeft: 8 }}
                >
                    Deletar
                </Button>
            </Box>
        )
    }
]

const List = (props) => {

    let combinedColumns = [
        ...props.columns,
        ...columnsActions
    ];

    if (props.adicionarBtDesabilitado == true) combinedColumns = props.columns; 

    return (
        
            <Stack
                spacing={1}
                alignItems="right"
                direction="column"
            >
                <Subtitulo
                    texto={props.texto}
                />
                <Paper sx={{ height: 500, width: '100%' }}>
                    <Button 
                        href={props.rota}
                        disabled={props.adicionarBtDesabilitado}
                    >
                        Adicionar                        
                    </Button>
                    <DataGrid
                    rows={props.rows}
                    columns={combinedColumns}
                    initialState={{ pagination: { page: 0, pageSize: 5 } }}
                    pageSizeOptions={[5, 10]}
                    sx={{
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: '#171D1F',  // Cor de fundo do cabeçalho
                            color: '#171D1F',  // Cor do texto do cabeçalho
                        },
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: '#c9aac5',  // Cor da linha ao passar o mouse
                        },
                        '& .MuiDataGrid-selectedRowCount': {
                            color: '#BCBCBC',  // Cor do contador de linhas selecionadas
                        },
                        '& .MuiTablePagination-actions .MuiButtonBase-root': {
                            color: '#BCBCBC',  // Cor dos botões de paginação (anterior/próximo)
                        },
                        '& .MuiTablePagination-input': {
                            color: '#BCBCBC', // Cor do texto "Rows per page"
                        },
                        '& .MuiTablePagination-root': {
                            color: '#BCBCBC', // Cor geral do texto de paginação
                        },
                        '& .MuiTablePagination-selectLabel': {
                            color: '#BCBCBC', // Cor do texto "Rows per page"
                        },
                        '& .MuiTablePagination-actions button': {
                            color: '#BCBCBC', // Cor dos botões de navegação (anterior e próximo)
                        },
                    }}                    
                />
                </Paper>
                <Navegacao
                    rotaVoltar={props.rotaVoltar}
                />
            </Stack>
        
    );
};

export default List;
