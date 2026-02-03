import MyAuxiliumImagePreview from '@/assets/img/myauxilium.png';
import TwifoneImagePreview from '@/assets/img/twifone.png';
import MarkitImagePreview from '@/assets/img/markit.png';
import NyAnioImagePreview from '@/assets/img/ny-anio.png';

export const PROJECTS = [
    {
        name: 'myAuxilium',
        description: "myauxilium-project-description",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        website: 'https://myauxilium.ai', // 
        imagePreview: MyAuxiliumImagePreview,
    },
    {
        name: 'Twifone',
        description: "twifone-project-description",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        website: 'https://twifone.come', // 
        imagePreview: TwifoneImagePreview,
    },
    {
        name: 'mark[it]',
        description: "markit-project-description",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        website: 'https://markit-mg.netlify.app', // 
        imagePreview: MarkitImagePreview,
    },
    {
        name: 'Ny Anio',
        description: "nyanio-project-description",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        codeRepositoryLink: 'https://github.com/rabemarcellin/ny-anio',
        website: 'http://nyanio.netlify.app', // 
        imagePreview: NyAnioImagePreview,
    },
    {
        name: 'Archive Bot',
        description: "archivebot-project-description", 
        status: 4, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        codeRepositoryLink: 'https://github.com/rabemarcellin/archive-bot',
        website: null, // 
    },
    {
        name: 'Tanakhael',
        description: "tanakhael-project-description", 
        status: 5, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        codeRepositoryLink: 'https://github.com/rabemarcellin/Tanakhael',
        website: null, // 
    },
    // {
    //     name: 'Didy Folo',
    //     description: "didyfolo-project-description",
    //     status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
    //     codeRepositoryLink: 'https://github.com/rabemarcellin/didy-folo',
    //     website: 'http://marcellinrabe.github.io/didy-folo', // 
    // },
    // {
    //     name: 'Toast API',
    //     description: "toastapi-project-description",
    //     status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
    //     codeRepositoryLink: 'https://github.com/rabemarcellin/Toast-API',
    //     website: 'http://toast-api.onrender.com', // 
    // },
]