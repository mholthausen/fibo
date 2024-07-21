import React from 'react';
import { Typography, Progress, Table } from 'antd';

const { Title } = Typography;

interface FiboPopoverProps {
  num: number;
  time: 'minutes' | 'hour' | 'hours' | 'day' | 'week' | 'weeks' | 'month';
  unknowns: number;
}

const FiboPopover: React.FC<FiboPopoverProps> = ({ num, time, unknowns }) => {
  const timeMapping = {
    minutes: 'Minutes',
    hour: 'An hour',
    hours: 'Hours',
    day: 'Day',
    week: 'Week',
    weeks: 'Weeks',
    month: 'Month'
  };

  const dataSource = [
    {
      key: '1',
      label: 'Time',
      value: unknowns < 100 ? timeMapping[time] : 'blurry'
    },
    {
      key: '2',
      label: 'Unknowns',
      value: (
        <Progress
          percent={unknowns}
          showInfo={false}
          strokeColor="orange"
        />
      )
    }
  ];

  const columns = [
    {
      title: '',
      dataIndex: 'label',
      key: 'label'
    },
    {
      title: '',
      dataIndex: 'value',
      key: 'value'
    }
  ];

  return (
    <div>
      <Title level={4}>Modified Fibonacci: {num}</Title>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        showHeader={false}
        bordered={false}
      />
    </div>
  );
};

export default FiboPopover;
