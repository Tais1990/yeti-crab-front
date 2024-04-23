import { Table, withTableSorting } from "@gravity-ui/uikit";

interface ClaimsProps {
    
}

const Claims : React.FC<ClaimsProps> = ({ }) => {
    const MyTable = withTableSorting(Table);
    return (
        <>
            <MyTable
                columns={[{id: "name", name: "Название", meta:{sort: true}}, {id: "age", name: "Age", meta:{sort: true}}]}
                data={[{
                    name: "123",
                    age: 12
                }, {
                    name: "123!!",
                    age: 16
                }]}
                onRowClick={(item, index, event) => {
                    console.log('test', item, index, event);                    
                }}
                verticalAlign='middle'

            ></MyTable>
        </>
    );
};

export default Claims;