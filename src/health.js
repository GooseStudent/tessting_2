export default function HealthStat (characterData){
    const {health} = characterData;

    if (health > 50) {
        return "healthy";
    }

    if (health >= 15) {
        return "wounded";
    }

    return "critical";
}