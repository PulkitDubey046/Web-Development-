import TextInput from "./TextInput/TextInput";

function App(){
  return (
    <div>
      <h1 className="text-3xl font-semibold">Wellcome to HangMan! </h1>
      <TextInput label={"Input Your Word"} value="" onChange={()=> {} }  />
    </div>
  )
};

export default App;