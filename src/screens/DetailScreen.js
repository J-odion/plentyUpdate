import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Center,
  FlatList,
  useToast,
  NativeBaseProvider,
  ScrollView,
} from 'native-base';
import {Feather, Entypo} from 'react-native-vector-icons';

export default function DetailScreen({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center flex={1} px="3">
          {loading ? (
            <Text>loading ....</Text>
          ) : (
            data.map(post => (
              <View>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'red',
                      marginRight: 20,
                    }}>
                    {post.id}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'red',
                    }}>
                    {post.title}
                  </Text>
                </View>

                <Text>{post.body}</Text>
              </View>
            ))
          )}
          <Text>Still working</Text>
          <Text>David don start to dey disturb me ooooo</Text>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}
