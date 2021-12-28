import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./contexts/register";
import HeaderProvider from "./contexts/header";
import LoginProvider from "./contexts/login";
import ItemCardProvider from "./contexts/main";
import ProfileProvider from "./contexts/profile";
import CreateProductProvider from "./contexts/createProduct";
import HistoryProvider from "./contexts/history";
import CartProvider from "./contexts/cart";
import ItemCartProvider from "./contexts/productDetails";
import ShowAndEditProvider from "./contexts/showAndEdit";
import PendingApprovalProvider from "./contexts/pendingApproval";
import FooterProvider from "./contexts/footer";
import RejectedProvider from "./contexts/rejected";


ReactDOM.render(
  <Router>
    <LoginProvider>
      <FooterProvider>
        <ShowAndEditProvider>
          <PendingApprovalProvider>
            <HistoryProvider>
              <HeaderProvider>
                <CreateProductProvider>
                  <ItemCardProvider>
                    <RegisterProvider>
                      <ProfileProvider>
                        <CartProvider>
                          <ItemCartProvider>
                            <RejectedProvider>
                            <App />
                            </RejectedProvider>
                          </ItemCartProvider>
                        </CartProvider>
                      </ProfileProvider>
                    </RegisterProvider>
                  </ItemCardProvider>
                </CreateProductProvider>
              </HeaderProvider>
            </HistoryProvider>
          </PendingApprovalProvider>
        </ShowAndEditProvider>
      </FooterProvider>
    </LoginProvider>
  </Router>,

  document.getElementById("root")
);
