// Function to calculate the total shards based on levels and shard cost
function calculateTotalShards() {
    const shardCost = parseInt(document.getElementById('shardCost').value);
    const levelQuantities = [
        parseInt(document.getElementById('level1').value) || 0,
        parseInt(document.getElementById('level2').value) || 0,
        parseInt(document.getElementById('level3').value) || 0,
        parseInt(document.getElementById('level4').value) || 0,
        parseInt(document.getElementById('level5').value) || 0,
        parseInt(document.getElementById('level6').value) || 0,
        parseInt(document.getElementById('level7').value) || 0
    ];

    let totalShards = 0;
    for (let i = 0; i < levelQuantities.length; i++) {
        totalShards += levelQuantities[i] * shardCost * Math.pow(3, i);
    }

    const ownedShards = parseInt(document.getElementById('ownedShards').value) || 0;
    const totalOwnedShards = totalShards + ownedShards;
    const targetLevel = parseInt(document.getElementById('targetLevel').value);
    const targetLevelCost = shardCost * Math.pow(3, targetLevel - 1);

    const remainingShards = targetLevelCost - totalOwnedShards;

    if (remainingShards > 0) {
        document.getElementById('result').innerHTML = "You need " + remainingShards + " more shards.";
    } else {
        document.getElementById('result').innerHTML = "You have enough shards!";
    }
}

function resetPage(){
    document.getElementById('level1').value = 0;
    document.getElementById('level2').value = 0;
    document.getElementById('level3').value = 0;
    document.getElementById('level4').value = 0;
    document.getElementById('level5').value = 0;
    document.getElementById('level6').value = 0;
    document.getElementById('level7').value = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('targetLevel').selectedIndex = 0; 
}