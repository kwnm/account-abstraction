const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const path = require('path');

/**
 * @swagger
 * /api/runop:
 *   post:
 *     summary: Execute the runop.ts script with depositFee parameters
 *     description: Runs the Hardhat script scripts/runop.ts with custom depositFee parameters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               baseDate:
 *                 type: integer
 *                 description: Base date for the deposit
 *                 example: 20240318
 *               gameSeq:
 *                 type: integer
 *                 description: Game sequence number
 *                 example: 1
 *               memberSeq:
 *                 type: integer
 *                 description: Member sequence number
 *                 example: 1317
 *               value:
 *                 type: string
 *                 description: Amount in ETH to deposit
 *                 example: "0.001"
 *             required:
 *               - baseDate
 *               - gameSeq
 *               - memberSeq
 *               - value
 *     responses:
 *       200:
 *         description: Script executed successfully
 *       400:
 *         description: Invalid parameters
 *       500:
 *         description: Error executing script
 */
router.post('/runop', express.json(), async (req, res) => {
    try {
        const { baseDate, gameSeq, memberSeq, value } = req.body;

        // Validate parameters
        if (!baseDate || !gameSeq || !memberSeq || !value) {
            return res.status(400).json({ 
                error: 'Missing required parameters' 
            });
        }

        // Get the project root directory
        const projectRoot = path.resolve(__dirname, '../../../');
        
        // Create command with parameters
        const command = `DEPOSIT_BASE_DATE=${baseDate} DEPOSIT_GAME_SEQ=${gameSeq} DEPOSIT_MEMBER_SEQ=${memberSeq} DEPOSIT_VALUE="${value}" npx hardhat run scripts/runop.ts`;

        // Execute the Hardhat script
        exec(command, {
            cwd: projectRoot
        }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error}`);
                return res.status(500).json({ error: error.message });
            }
            
            if (stderr) {
                console.error(`stderr: ${stderr}`);
            }
            
            console.log(`stdout: ${stdout}`);
            res.status(200).json({ 
                message: 'Script executed successfully',
                output: stdout 
            });
        });
    } catch (error) {
        console.error('Error executing script:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;