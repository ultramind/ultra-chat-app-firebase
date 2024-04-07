const SearchBox = () => {
  return (
    <div className=" w-full border-b-2 border-b-forground">
      <input
        type="text"
        placeholder="Find users"
        className="w-full bg-transparent py-2 px-4 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
