import React, { useState } from 'react';

// export default function ControlledComponent() {
//   const [name, setName] = useState('');
//   const [essay, setEssay] = useState(
//     'Please write an essay about your favorite DOM element.'
//   );
//   const [flavor, setFlavor] = useState('coconut');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleEssayChange(event) {
//     setEssay(event.target.value);
//   }

//   function handleFlavorChange(event) {
//     setFlavor(event.target.value);
//   }

//   function handleSubmit(event) {
//     alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={handleChange} />
//       </label>
//       <br />
//       <br />
//       <label>
//         Essay:
//         <textarea value={essay} onChange={handleEssayChange} />
//       </label>
//       <br />
//       <br />
//       <label>
//         Pick your favorite flavor:
//         <select value={flavor} onChange={handleFlavorChange}>
//           <option value="grapefruit">Grapefruit</option>
//           <option value="lime">Lime</option>
//           <option value="coconut">Coconut</option>
//           <option value="mango">Mango</option>
//         </select>
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

// 다중 입력 제어
// 여러 input 엘리먼트를 제어해야할 때
export default function ControlledComponent() {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState(
    'Please write an essay about your favorite DOM element.'
  );
  const [flavor, setFlavor] = useState('coconut');

  function handleChange(event) {
    // name, type...등 Synthetic Event가 제공하는 어트리뷰트를 사용할 수 있음
    const name = event.target.name;
    if (name === 'name') {
      setName(event.target.value);
    }
    if (name === 'essay') {
      setEssay(event.target.value);
    }
    if (name === 'flavor') {
      setFlavor(event.target.value);
    }
  }

  function handleSubmit(event) {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
