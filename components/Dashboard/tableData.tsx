import { columns, Payment } from "../../components/Dashboard/tableData/columns";
import { DataTable } from "../../components/Dashboard/tableData/data-table";

function getData(): Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "Cover page",
      status: "In Progress",
      sectionType: "Cover page",
      reviewer: "Eddie Lake",
      target: 18,
      limit: 5,
    },
    {
      id: "2",
      name: "Table of contents",
      status: "Done",
      sectionType: "Table of contents",
      reviewer: "Ahmad",
      target: 29,
      limit: 24,
    },
    {
      id: "3",
      name: "Executive summary",
      status: "Done",
      sectionType: "Narrative",
      reviewer: "Alice",
      target: 10,
      limit: 13,
    },
    {
      id: "4",
      name: "Advanced Algorithms and Machine Learning",
      status: "In Progress",
      sectionType: "Narrative",
      reviewer: "Jamik Tashpulatov",
      target: 27,
      limit: 23,
    },
    // ...
  ];
}

export default function TableData() {
  //   const data = await getData();
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
