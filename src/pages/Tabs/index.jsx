import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tabs from "../../components/Tabs";

export default function TabsPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>Tabs Page</h1>
        <Tabs>
          <div label="Tab 1">Tab 1 content</div>
          <div label="Tab 2">Tab 2 content</div>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
