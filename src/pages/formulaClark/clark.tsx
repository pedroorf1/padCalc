import React from "react";
import { View, ScrollView, StyleSheet, Text, TextInput } from "react-native";

import baseStyles from "../../baseStyles/styles.json";

export const Clark = () => {
  type TDataType = {
    idade?: number;
    peso?: number;
    altura?: number;
    sexo?: string;
    doseAdulta?: number;
    resultado?: number;
  };

  const [dataForCalc, setDataForCalc] = React.useState<TDataType>({
    peso: 0,
    doseAdulta: 0,
  } as TDataType);

  const [result, setResult] = React.useState(0);

  const globalRegex = new RegExp(/[a-zA-Z@$&_]/, "g");
  const divisor = 70;

  React.useEffect(() => {
    let calc = (dataForCalc.peso / divisor) * dataForCalc.doseAdulta;
    calc = Number(calc.toFixed(2));
    setResult(calc);
  }, [dataForCalc]);

  return (
    <View style={styles.safe}>
      <ScrollView>
        <View>
          <Text style={styles.label}>Qual o peso da criança em kg?</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(peso) =>
              setDataForCalc({
                ...dataForCalc,
                peso:
                  !globalRegex.test(peso) && peso != "" ? parseInt(peso) : 0,
              })
            }
            defaultValue="0"
          />
        </View>
        <View>
          <Text style={styles.label}>Qual a dose adulta do medicamento?</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(doseAdulta) =>
              setDataForCalc({
                ...dataForCalc,
                doseAdulta:
                  !globalRegex.test(doseAdulta) && doseAdulta != ""
                    ? parseInt(doseAdulta)
                    : 0,
              })
            }
            defaultValue="0"
          />
        </View>
        <View style={styles.resultado}>
          <Text style={styles.title}>Resultado</Text>
          <Text style={styles.textResultados}>
            Peso da Criança: {dataForCalc.peso} kg.
          </Text>
          <Text style={styles.textResultados}>
            Dose adulta: {dataForCalc.doseAdulta}
          </Text>
          <Text style={styles.textResultados}>Dosagem encontrada</Text>
          <Text style={styles.textResultadosDosagem}>{result}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    display: "flex",
    marginTop: -5,
    marginBottom: -10,
    padding: 15,
    paddingTop: 30,
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
    backgroundColor: baseStyles.bases.backgroundColor,
    color: baseStyles.bases.color,
  },
  inputText: {
    height: "auto",
    fontSize: 20,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    color: "white",
    backgroundColor: "black",
    marginVertical: 10,
  },
  label: {
    width: "100%",
    fontSize: 15,
    borderColor: "white",
    color: "white",
    marginTop: 15,
  },
  resultado: {
    display: "flex",
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 5,
    backgroundColor: "#000080",
    borderRadius: 10,
    color: baseStyles.bases.color,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: baseStyles.bases.color,
  },
  textResultados: {
    fontSize: 18,
    textAlign: "center",
    color: baseStyles.bases.color,
    marginVertical: 8,
    lineHeight: 30,
  },
  textResultadosDosagem: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: baseStyles.bases.color,
    marginVertical: 8,
    lineHeight: 30,
    backgroundColor: "#FF00FF",
    padding: 15,
    borderRadius: 10,
  },
});
