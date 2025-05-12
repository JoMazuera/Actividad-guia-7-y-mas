import React, { useState } from "react";
import { View, Text, Button, Alert, TouchableOpacity } from "react-native";

const App = () => {
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    Alert.alert("Respuestas Enviadas", JSON.stringify(answers, null, 2));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>¿Cuál es tu lenguaje favorito?</Text>
      {["JavaScript", "Python", "Java", "C#"].map(opt => (
        <TouchableOpacity key={opt} onPress={() => handleSelect(1, opt)}>
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}

      <Text>¿Con qué frecuencia usas React?</Text>
      {["Diariamente", "Semanalmente", "Ocasionalmente", "Nunca"].map(opt => (
        <TouchableOpacity key={opt} onPress={() => handleSelect(2, opt)}>
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default App;
