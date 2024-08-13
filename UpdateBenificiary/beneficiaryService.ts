export class BeneficiaryService{
    constructor(
        log:loggerImterface,
        AesService:AesCryptoService,
        private AuditRepo:TransactionAuditEnity,
        private bankingRestTemplate:BankingRestTemplate,
        private aseKey:AesKey 
    ){}

    public async updateCentralBankPayeeName(eventId:string,financialId:string,channelId:string):Promise<void>{
   const transactionAuditEntity =await this.getTransactionAuditEntity(eventId);
if(!transactionAuditEntity){
    throw new CsError(404,'No entity Found');
    }
    const BeneficaryVo = await this.getBeneficiaryDetails(transactionAuditEntity.beneficiaryId ,financialId ,channelId);
    

    }
}