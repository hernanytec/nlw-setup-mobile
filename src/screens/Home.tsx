import { ScrollView, Text, View } from 'react-native';
import { DAY_SIZE, HabitDay } from '../components/HabitDay';
import { Header } from '../components/Header';
import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export function Home() {
  const datesFromYearStart = generateDatesFromYearBeginning();
  const minimunSummaryDatesSize = 18 * 5;
  const amountOfDaysToFill = minimunSummaryDatesSize - datesFromYearStart.length;

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay}-${i}`}
            className="text-zinc-400 text-xl text-center font-bold mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <HabitDay disabled key={index} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
