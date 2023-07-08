import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const AdminGuard = (props: any) => {
  const { children, role } = props;
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (role !== "admin") {
      router.push({ pathname: "/401" }).catch((error) => console.log(error));
    } else {
      setChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};

AdminGuard.propTypes = {
  children: PropTypes.node,
  role: PropTypes.string,
};

export default AdminGuard;
