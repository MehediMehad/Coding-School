


const WorkList = ({wakings}) => {


    return (
        <div>

<div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Role</th>
        <th>Tasks</th>
        <th>Date</th>
        <th>Working Time</th>
      </tr>
    </thead>
    <tbody>
      {
        wakings.map((item, index )=> <tr key={item._id}>
            <th>
                {index + 1}
            </th>
            <td>
                {item?.role}
            </td>
            <td>{item?.tasks}</td>
            <td>{item?.date}</td>
            <td>{item?.hoursWorked}</td>
          </tr>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default WorkList;