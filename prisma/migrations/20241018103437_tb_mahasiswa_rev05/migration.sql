-- AlterTable
ALTER TABLE `tb_mahasiswa` ADD COLUMN `status` ENUM('Y', 'N') NOT NULL DEFAULT 'Y',
    MODIFY `jurusan` VARCHAR(25) NOT NULL;
