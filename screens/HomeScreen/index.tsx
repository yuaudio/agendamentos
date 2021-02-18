import React, { useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';


import { Platform, Alert,StyleSheet } from 'react-native';


import {
  Container,
  Header,
  BackButton,
  HeaderTitle,

  Content,
  
  Calendar,

  Title,
  Schedule,
  Section,
  SectionTitle,
  SectionContent,

  Hour,
  HourText,
  CreateAppointmentButton,
  CreateAppointmentButtonText,
} from './styles';



const HomeScreen: React.FC = () => {
  
  const route = useRoute();
  const { goBack, navigate } = useNavigation();

  const routeParams = route.params as RouteParams;

  const [availability, setAvailability] = useState<AvailabilityItem[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  



  const [selectedHour, setSelectedHour] = useState(0);
  
 

  

 

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

 
 

 

 

  

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Teste calendario</HeaderTitle>

       
      </Header>

      <Content>
       
      

        <Calendar>
          <Title>Escola a data</Title>
            <DateTimePicker
               format="dd/MM/yyyy"
              value={selectedDate}

            />
    
        </Calendar>

        <Schedule>
          <Title>Escolha o horario</Title>

          <Section>
            <SectionTitle>Manhã</SectionTitle>
            <SectionContent>
                  <Hour
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      08:00

                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      08:30
                    
                    </HourText>
                    
                  </Hour>
                  <Hour
                    
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      09:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      09:30
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      10:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      10:30
                    
                    </HourText>
                    
                  </Hour>
                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      11:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      11:30
                    
                    </HourText>
                    
                  </Hour>
              
            </SectionContent>



          </Section>

          <Section>
            <SectionTitle>Tarde</SectionTitle>

            <SectionContent>
              
               
                  <Hour
                  style={styles.color}
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      12:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      12:30
                    
                    </HourText>
                    
                  </Hour>
                  <Hour
                    
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      13:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      13:30
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      14:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      14:30
                    
                    </HourText>
                    
                  </Hour>


                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      15:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      15:30
                    
                    </HourText>
                    
                  </Hour>
                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      16:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                      
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      16:30
                    
                    </HourText>
                    
                  </Hour>
                  <Hour
                    
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      17:00
                    
                    </HourText>
                    
                  </Hour>

                  <Hour
                    
                    onPress={() => {
                      handleSelectHour("");
                    }}
                  >
                    <HourText selected={""}>
                      17:30
                    
                    </HourText>
                    
                  </Hour>
                
                  
                
              
            </SectionContent>



          </Section>


          <Section>
            <SectionTitle>Noite</SectionTitle>

            <SectionContent>
              
               
              <Hour
              
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  18:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  18:30
                
                </HourText>
                
              </Hour>
              <Hour
                
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  19:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  19:30
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  20:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  20:30
                
                </HourText>
                
              </Hour>
              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  21:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  21:30
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  22:00
                
                </HourText>
                
              </Hour>
          
        </SectionContent>
          </Section>
          <Section>
            <SectionTitle>Hora Extra</SectionTitle>

            <SectionContent>
         
              <Hour
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  23:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  23:30
                
                </HourText>
                
              </Hour>
              <Hour
                
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  00:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  00:30
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  01:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  01:30
                
                </HourText>
                
              </Hour>
              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  02:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  02:30
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  03:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  04:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  04:30
                
                </HourText>
                
              </Hour>
              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  05:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  05:30
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  06:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  06:30
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  07:00
                
                </HourText>
                
              </Hour>

              <Hour
                
                onPress={() => {
                  handleSelectHour("");
                }}
              >
                <HourText selected={""}>
                  07:30
                
                </HourText>
                
              </Hour>
          
        </SectionContent>
          </Section>


          
        </Schedule>

        <CreateAppointmentButton onPress={""}>
          <CreateAppointmentButtonText>Agendar</CreateAppointmentButtonText>
        </CreateAppointmentButton>
     
       
      </Content>
      
    </Container>
  );
};

export default HomeScreen;



const styles = StyleSheet.create({
  color: {
    
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});