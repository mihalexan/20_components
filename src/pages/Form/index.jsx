import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import Checkbox from "../../components/Checkbox";
import RadioButton from "../../components/RadioButton";

export default function FormPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>Form Page</h1>
        <Form />
        <Form>
          <InputField label="Name" />
          <InputField label="Email" />
          <Checkbox label="Subscribe to newsletter" />
          <RadioButton label="Option 1" value="option1" />
          <RadioButton label="Option 2" value="option2" />
        </Form>
        <InputField />
        <Checkbox />
        <RadioButton />
      </main>
      <Footer />
    </div>
  );
}
