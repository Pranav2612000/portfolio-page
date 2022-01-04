const CONTRACT_ADDRESS = '0xf7321A4F1B1a88870E31d5ef8D1F340BC088C306';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    intelligence: characterData.intelligence ? characterData.intelligence.toNumber() : null
  }
};
 
export { CONTRACT_ADDRESS, transformCharacterData };
