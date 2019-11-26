export default {
    config:{
        title:{
            main:'基本信息'
        },
        align:'center',
        btn:[
            {
                key:'nextStep',
                show:true,
                type:'primary',
                text:'下一步',
                // width:'100%'
            }
        ],
        // readonly:true,
        // disabled:true,
    },
    data:[
        {
            label:'保理合同模板：',
            keyName:'name',
            urlKeyName:'filePath',
            valueKeyName:'fileId',
            apiUrl:'',
            defaultValue:'',
            type:'upload',
            action:'/saas-online-server/api?apiName=uploadAccountFile',
            accept:'image/jpg,image/jpeg,image/png,.pdf',
            name:'fileList',
            uploadType:'image',
            uploadUrl:'',
            limitSize:10,//单位 M
            html:'请上传保理合同模板',
            cutTitle:'111',
            data:{
                apiVersion: '1.0',
                token: '85eff355d02714456aab971247d9f946c',
                appVersion: '1.0',
                saleSystem: 'SAAS',
                clientType: '01',
                clientIp: '127.0.0.1',
                stationId: 1,
                userId: '1000000342',
                tradeWay: 'S1',
                businessSceneId: 'A00002',
                fileType: 'A108',
                reqId: '20190805102113100242',
            },
            rules: [
                {
                    required: true,
                    message: "请上传保理合同模板",
                    trigger: "blur"
                }
            ]
        },
        {
            label:'保理合同模板：',
            keyName:'factoringContractTemplate',
            urlKeyName:'filePath',
            valueKeyName:'fileId',
            apiUrl:'',
            defaultValue:'',
            type:'upload',
            action:'/saas-online-server/api?apiName=uploadAccountFile',
            accept:'image/jpg,image/jpeg,image/png,.pdf',
            name:'fileList',
            uploadType:'file',
            uploadUrl:'',
            limitSize:10,//单位 M
            html:'请上传保理合同模板',
            cutTitle:'111',
            data:{
                apiVersion: '1.0',
                token: '85eff355d02714456aab971247d9f946c',
                appVersion: '1.0',
                saleSystem: 'SAAS',
                clientType: '01',
                clientIp: '127.0.0.1',
                stationId: 1,
                userId: '1000000342',
                tradeWay: 'S1',
                businessSceneId: 'A00002',
                fileType: 'A108',
                reqId: '20190805102113100242',
            },
            rules: [
                {
                    required: true,
                    message: "请上传保理合同模板",
                    trigger: "blur"
                }
            ]
        },
        
    ]
  }