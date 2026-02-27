interface Props {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
  );
};

export default StatCard;