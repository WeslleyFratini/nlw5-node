import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Settings";

@EntityRepository()
class SettingsRepository extends Repository <Setting> {

}

export { SettingsRepository }