const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl font-bold text-purple-900">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
