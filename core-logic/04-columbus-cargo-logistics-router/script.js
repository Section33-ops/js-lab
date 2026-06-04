const cargoBatch = [
  { id: 101, weight: 35, destination: "Cleveland" },
  { id: 102, weight: 70, destination: "Cincinnati" },
  { id: 103, weight: 55, destination: "Toledo" },
];

function processCargo(batch) {
  let heavyCargo = [];
  let expressCargo = [];
  let standardCargo = [];
  let totalWeight = 0;

  for (const cargo of batch) {
    totalWeight += cargo.weight;
    // console.log(cargo);
    if (cargo.weight >= 50) {
      heavyCargo.push(cargo);
    } else if (cargo.destination === "Cleveland") {
      expressCargo.push(cargo);
    } else {
      standardCargo.push(cargo);
    }
  }

  console.log(`Heavy Cargo: ${heavyCargo.length}`);
  console.log(`Express Cargo: ${expressCargo.length}`);
  console.log(`Standard Cargo: ${standardCargo.length}`);
  console.log(`Total Weight: ${totalWeight}`);
}

processCargo(cargoBatch);
