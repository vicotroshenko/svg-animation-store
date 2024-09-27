import React from "react";
import Container2 from "../Container2/Container2";
import feature1 from "../../../images/features/1.png";
import feature2 from "../../../images/features/2.png";
import feature3 from "../../../images/features/3.png";
import feature4 from "../../../images/features/4.png";
import feature5 from "../../../images/features/5.png";
import feature6 from "../../../images/features/6.png";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium quis nihil facilis porro quas laudantium necessitatibus cupiditate non, dolorum nulla tempora aliquid assumenda tenetur neque, molestiae voluptates blanditiis nobis.";
const ExampleJs1 = () => {
  //copy the UI text function
  const copy = () => {
    navigator.clipboard.writeText(text);
    alert("The text was copied");
  };

  const styles = {
    background: "#" + Math.floor(Math.random() * 0xffffff).toString(16), // create random hex color
  };

	const array = [
		{name: 'Kelly', age: 19},
		{name: 'Michel', age: 23}
	]

	console.log(Object.groupBy(array, person => person.name));

  return (
    <>
      <Container2 title="1. Copy the ui text" images={[feature1]}>
        <p>{text}</p>
        <button type="button" onClick={copy}>
          Copy the text above
        </button>
      </Container2>

      <Container2 title="2. Random HEX color" images={[feature2]}>
        <div style={styles}></div>
      </Container2>
      <Container2
        title="3. Combine two arrays with simple non-repeating values"
        images={[feature3]}
      />
      <Container2
        title="4. Transitionend event. Is executed after css transition"
        images={[feature4]}
      />
      <Container2
        title="5. New array method array.with() return new array with changed value"
        images={[feature5]}
      />
      <Container2
        title="6. Object method allows group new collections"
        images={[feature6]}
      />
    </>
  );
};

export default ExampleJs1;
