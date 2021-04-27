import { EntityRepository, Repository } from "typeorm";

import { Setting } from "../entities/Settings";

@EntityRepository(Setting) // EntityRepository do tipo Setting
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };