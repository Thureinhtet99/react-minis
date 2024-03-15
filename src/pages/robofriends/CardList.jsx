import Card from "./Card";

export default function CardList({ filteredRobots }) {
  return (
    <>
      {filteredRobots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </>
  );
}
