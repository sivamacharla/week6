function NavBar({ search, setSearch, groupFilter, setGroupFilter, breedGroups }) {
  return (
    <nav className="navbar">
      <input
        type="text"
        placeholder="Search breed..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)}>
        <option value="All">All Groups</option>
        {breedGroups.map((group) => (
          <option key={group} value={group}>{group}</option>
        ))}
      </select>
    </nav>
  );
}

export default NavBar;
