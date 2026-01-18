import { Button } from "@/components/ui/button";

function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
