import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() {
  const [copos, setCopos] = useState(0);
  const [msg, setMsg] = useState('Pressione quanto tomar um copo de agua');
  useEffect(() => {
    if (copos >= 8) setMsg('🏆 Meta do dia atingida!');
    if (copos == 0) setMsg('Pressione quando tomar um copo de agua!');
  }, [copos]);
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{msg}</Text>
      <Text style={styles.counter}>{copos}</Text>
      <View style={styles.btn_field}>
        <TouchableOpacity style={styles.btn} onPress={() => setCopos(copos + 1)} >
          <Text style={styles.btnText}>Clique aqui para adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={()=>setCopos(0)}>
          <Text style={styles.btnText}>Resetar a contagem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#081c15'},
  msg:       { color: '#d8f3dc', fontSize: 18, marginBottom: 12, fontWeight: 'bold'},
  counter:   { color: '#d8f3dc', fontSize: 72, fontWeight: 'bold'},
  btn_field:  {flexDirection: 'row', gap: 10},
  btn:       { marginTop: 10, backgroundColor: '#74c69d',paddingHorizontal: 10, borderRadius: 5, paddingVertical: 10,width: 150 },
  btn2:      { marginTop: 10, backgroundColor: '#2d6a4f',paddingHorizontal: 10, borderRadius: 5, paddingVertical: 10, width: 150},
  btnText:   { color: '#d8f3dc', fontSize: 20, fontWeight: 'bold' },
});
