import { chProjectDir, rmDist, copyPackageFiles } from 'lion-system'
import { execaCommandSync as exec } from 'execa'

chProjectDir(import.meta.url);
rmDist()
exec('tsc')
exec('tsc-alias')
copyPackageFiles();