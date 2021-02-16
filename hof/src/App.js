import logo from './logo.svg';
import './App.css';
import HigherOrderComponent from './components/HigherOrderComponent';
import AgeComponent from './components/AgeComponent';
function App() {
  var userData= [
    { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
    { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
    { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
    { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
    { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

  ];
  var userDataOfDesigner=filterBasedOnType(userData,"Designer");
  var userDataStartsWithJ=filterBasedOnNames(userData,"J");
  var userDataBasedOnAge=filterBasedOnAge(userData,28,50);
  var totalAgeOfDesigners=totalYearsOfExperience(userDataOfDesigner);
  return (
    <div className="App">
     <HigherOrderComponent title="Display all items" userData={userData}/>
     <HigherOrderComponent  title="Display based on user type" userData={userDataOfDesigner}/>
     <HigherOrderComponent  title="Filter data starting with J" userData={userDataStartsWithJ}/>
     <HigherOrderComponent title="Filter age greater than 28 and less than or equal to 50" userData={userDataBasedOnAge}/>
     <AgeComponent title="Find total years of designers" age={totalAgeOfDesigners}/>
    </div>
  );
}

function filterBasedOnType(userData,type)
{
  return userData.filter((user)=>user.user_type==type);
}

function filterBasedOnNames(userData,nameStarting)
{
  return userData.filter((user)=>user.name.startsWith(nameStarting));
}

function filterBasedOnAge(userData ,lowerLimit,upperLimit)
{
  return userData.filter((user)=>(user.age>lowerLimit && user.age<=upperLimit));
}

function totalYearsOfExperience(userData)
{
  function reducer(accumulator,current)
  {
    return accumulator+current.years;
  }
  return userData.reduce(reducer,0);
}
export default App;
