import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, store } from "../store";

export const Providers = ({ children }: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persist} loading={null}>
      {children}
    </PersistGate>
  </Provider>
  );
};
