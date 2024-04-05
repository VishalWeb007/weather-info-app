
export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

export function GetTime(timezone){
    const localTime = new Date().getTime()
    const localOffset = new Date().getTimezoneOffset() * 60000
    const currentUtcTime = localOffset + localTime
    const cityOffset = currentUtcTime + 1000 * timezone
    const cityTime = new Date(cityOffset).toTimeString().split(' ')
    return  cityTime[0];
}
