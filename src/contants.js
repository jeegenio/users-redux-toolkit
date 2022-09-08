export const getFields = ({ userLevel }) => {
  return [
    { name: "name", label: "Name", required: true },
    { name: "title", label: "Title", required: true },
    { name: "department", label: "Department", equired: true },
    { name: "status", label: "Status ", equired: true },
  ];
};
