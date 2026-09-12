import React, {
  createContext,
  useCallback,
  useState,
} from "react";

import BuyActionWindow from "./BuyActionWindow";


/* =========================================================
   GENERAL CONTEXT
   ========================================================= */

const GeneralContext = createContext({
  openBuyWindow: () => {},
  openSellWindow: () => {},
  closeBuyWindow: () => {},
  isBuyWindowOpen: false,
  selectedStockUID: "",
  orderMode: "BUY",
});


/* =========================================================
   PROVIDER
   ========================================================= */

export const GeneralContextProvider = ({
  children,
}) => {

  const [isBuyWindowOpen, setIsBuyWindowOpen] =
    useState(false);

  const [selectedStockUID, setSelectedStockUID] =
    useState("");

  const [orderMode, setOrderMode] =
    useState("BUY");


  /* =======================================================
     OPEN BUY WINDOW
     ======================================================= */

  const handleOpenBuyWindow = useCallback(
    (uid) => {

      setSelectedStockUID(uid);

      setOrderMode("BUY");

      setIsBuyWindowOpen(true);

    },
    []
  );


  /* =======================================================
     OPEN SELL WINDOW
     ======================================================= */

  const handleOpenSellWindow = useCallback(
    (uid) => {

      setSelectedStockUID(uid);

      setOrderMode("SELL");

      setIsBuyWindowOpen(true);

    },
    []
  );


  /* =======================================================
     CLOSE ORDER WINDOW
     ======================================================= */

  const handleCloseBuyWindow = useCallback(
    () => {

      setIsBuyWindowOpen(false);

      setSelectedStockUID("");

      setOrderMode("BUY");

    },
    []
  );


  /* =======================================================
     CONTEXT VALUE
     ======================================================= */

  const contextValue = {
    openBuyWindow: handleOpenBuyWindow,

    openSellWindow: handleOpenSellWindow,

    closeBuyWindow: handleCloseBuyWindow,

    isBuyWindowOpen,

    selectedStockUID,

    orderMode,
  };


  return (
    <GeneralContext.Provider
      value={contextValue}
    >

      {children}


      {/* =================================================
          ORDER WINDOW
          ================================================= */}

      {isBuyWindowOpen && selectedStockUID && (

        <BuyActionWindow
          uid={selectedStockUID}
          mode={orderMode}
        />

      )}

    </GeneralContext.Provider>
  );
};


export default GeneralContext;