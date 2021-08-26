export const jsonList = Array.from({ length: 21 }).map((_, i) => {
    return {
        id: i.toString(),
        title: `Block Nº${i}`,
        image: [
            `https://picsum.photos/1440/2842?random=${i}`,
            `https://picsum.photos/1440/2842?random=${i * 7}`,
            `https://picsum.photos/1440/2842?random=${i * 13}`,
        ],
    };
});
export const fakeJson = []


function JSONconverter(){
    for(let i=0;i<jsonList.length;i++){
        if(i == 0 || i % 3 == 0){
            let pos1 = [];
            let pos2 = [];
            let pos3 = [];
            pos1.push(jsonList[i]);
            pos2.push(jsonList[i + 1]);
            pos3.push(jsonList[i + 2]);
            let concat = pos1.concat(pos2, pos3)
            fakeJson.push(concat)
            
        }
    }
}JSONconverter()

export const length = fakeJson.length;
export const randomNumber = Math.round(Math.random() * (2 - 0) + 0);