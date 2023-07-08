import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const AuthGuard = (props: any) => {
  const { children } = props;
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    // TO DO: check if user is authenticated, if not, redirect to login page
  }, [router]);

  if (!checked) {
    return null;
  }

  return <>{children};</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
