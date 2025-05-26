import React, { useEffect, useState } from "react";
import { Table } from "antd";

export interface DatatableProps {
  columns: any[];
  dataSource: any[];
  searchValue?: string; // Accept search value as a prop
}

const CommonDatatable: React.FC<DatatableProps> = ({
  columns,
  dataSource,
  searchValue = "",
}) => {
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  // Filter data when searchValue changes
  useEffect(() => {
    if (searchValue) {
      const filteredData = dataSource.filter((record) =>
        Object.values(record).some((field) =>
          String(field).toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setFilteredDataSource(filteredData);
    } else {
      setFilteredDataSource(dataSource);
    }
  }, [searchValue, dataSource]);

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="custom-table antd-custom-table">
      <Table
        className="table datanew dataTable no-footer"
        columns={columns}
        rowHoverable={false}
        rowSelection={rowSelection}
        dataSource={filteredDataSource}
        pagination={{
          locale: { items_per_page: "" },
          nextIcon: <span>Next</span>,
          prevIcon: <span>Previous</span>,
          showTotal: (total, range) =>
            `Showing ${range[0]} - ${range[1]} of ${total} entries`,
        }}
      />
    </div>
  );
};

export default CommonDatatable;
