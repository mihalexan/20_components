import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import List from "../../components/List";

export default function ListPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>List Page</h1>
        <List items={["Item 1", "Item 2", "Item 3"]} />
      </main>
      <Footer />
      <List />
    </div>
  );
}
