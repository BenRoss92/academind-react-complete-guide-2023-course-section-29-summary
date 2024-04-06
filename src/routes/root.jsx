import { MainHeader } from "../components/MainHeader";
import { Outlet } from 'react-router-dom';

export function Root() {
  return (
    <>
      <MainHeader />
      {/* Outlet is a special component that React Router gives us. 
      It's a placeholder, like `children` in React.
      Where this route is defined (in `main.jsx`), the components 
      specified in the `children` array will be displayed in the place where `Outlet`
      is being used, i.e. here. */}
      <Outlet />
    </>
  );
}