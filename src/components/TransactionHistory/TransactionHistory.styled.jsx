import styled from "@emotion/styled";

export const Transaction = styled.table`
text-align: center;
font-size: 14px;
width: 700px;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
border: 1px solid #000;
border-radius: 4px ;
`;
export const TableHead = styled.thead`
color: #fff;
text-transform: uppercase;
th {
    background-color: rgb(102, 217, 255);
}
`;

export const TableRow = styled.tr`
background-color: rgb(102, 217, 255);
&:nth-of-type(even) {
    background-color: #B4AFAF
}
`;

export const TableBody = styled.tbody`
color: gray;
`;