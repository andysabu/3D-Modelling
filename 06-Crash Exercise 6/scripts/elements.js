/**
 * 
 * @param {*} width dimension
 * @param {*} height dimension
 * @param {*} depth dimension
 * @param {*} materials Array with the path of materials to be loaded
 * @param {*} side Side where the texture is applied: [THREE.DoubleSide, THREE.FrontSide, THREE.BackSide]
 * @param {*} x position x. null to ommit
 * @param {*} y position y. null to ommit
 * @param {*} z position z. null to ommit
 */
function buildBox(width, height, depth, materials, side, x, y, z) {
    let geometry = new THREE.BoxGeometry(width, height, depth);
    let loadedMaterials = loadMaterials(materials, side);
    
    let box = new THREE.Mesh(geometry, loadedMaterials);
    if (x != null) {
        box.position.x = x;
    }
    if (y != null) {
        box.position.y = y;
    }
    if (z != null) {
        box.position.z = z;
    }
    return box
}

/**
 * 
 * @param {*} materials Textures for that material
 * @param {*} mSide Side where the texture is applied: [THREE.DoubleSide, THREE.FrontSide, THREE.BackSide]
 */
function loadMaterials(materials, mSide) {
    let loadedMaterials = [];
    for (const material of materials) {
        const texture = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(material), side: mSide
        });
        loadedMaterials.push(texture);
    }
    return loadedMaterials;    
}