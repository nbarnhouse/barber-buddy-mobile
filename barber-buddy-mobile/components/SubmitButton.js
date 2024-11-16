import { useState } from 'react';
import { Button } from 'react-native';

export default function SubmitButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    console.log('Button clicked');
  };

  return <Button title="submit" color="#f6742c" onPress={handleClick} />;
}
