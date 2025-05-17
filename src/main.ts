import { CreateBaseUsecase } from "./application/usecase/base/create-base.usecase";
import { CreateConditionUsecase } from "./application/usecase/condition/create-condition.usecase";
import { CreateRuleUsecase } from "./application/usecase/rule/create-rule.usecase";
import { CreateValueUsecase } from "./application/usecase/value/create-value.usecase";
import { CreateVariableUsecase } from "./application/usecase/variable/create-variable.usecase";
import { ApiExpress } from "./infrastructure/api/express/api.express";
import { CreateBaseRoute } from "./infrastructure/api/express/routes/base/create-base.express.route";
import { BaseRepositoryPrisma } from "./infrastructure/repositories/base.repository.prisma";
import { ConditionRepositoryPrisma } from "./infrastructure/repositories/condition.repository.prisma";
import { RuleRepositoryPrisma } from "./infrastructure/repositories/rule.repository.prisma";
import { ValueRepositoryPrisma } from "./infrastructure/repositories/value.repository.prisma";
import { VariableRepositoryPrisma } from "./infrastructure/repositories/variable.repository.prisma";
import { prisma } from "./package/prisma/prisma";

/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();*/
function main() {
  const baseRepository = BaseRepositoryPrisma.create(prisma);
  const conditionRepository = ConditionRepositoryPrisma.create(prisma);
  const ruleRepository =  RuleRepositoryPrisma.create(prisma);
  const valueRepository = ValueRepositoryPrisma.create(prisma);
  const variableRepository = VariableRepositoryPrisma.create(prisma);

  const createBaseUseCase = CreateBaseUsecase.create(baseRepository);
  const createConditionUseCase = CreateConditionUsecase.create(conditionRepository, variableRepository, valueRepository, ruleRepository);
  const createRuleUseCase = CreateRuleUsecase.create(ruleRepository, baseRepository);
  const createValueUseCase = CreateValueUsecase.create(valueRepository, variableRepository);
  const createVariableUseCase = CreateVariableUsecase.create(variableRepository, baseRepository);

  const createBaseRoute = CreateBaseRoute.create(createBaseUseCase);

  const api = ApiExpress.create([createBaseRoute]);
  const port = 8080;

  api.start(port);
}
main();
