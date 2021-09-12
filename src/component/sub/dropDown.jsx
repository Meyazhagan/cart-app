function createNavList({ value, link, active, dropdown }, index) {
  let classA = "nav-link ";
  let classLi = "nav-item ";
  if (active) classA += "active ";
  let activeLi = (
    <li className={classLi} key={index}>
      <a className={classA} aria-current="page" href={link}>
        {value}
      </a>
    </li>
  );

  if (dropdown) {
    classA += "dropdown-toggle ";
    classLi += "dropdown ";
    activeLi = (
      <li className={classLi} key={index}>
        <a
          className={classA}
          id="navbarDropdown"
          href={link}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {value}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {dropdown.map((list, index) => createDropdown(list, index))}
        </ul>
      </li>
    );
  }
  return activeLi;
}

function createDropdown({ value, link }, index) {
  return value ? (
    <li key={index}>
      <a className="dropdown-item" href={link}>
        {value}
      </a>
    </li>
  ) : (
    <li key={index}>
      <hr className="dropdown-divider" />
    </li>
  );
}

export { createDropdown, createNavList };
